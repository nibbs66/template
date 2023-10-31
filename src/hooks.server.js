import { sequence } from '@sveltejs/kit/hooks';
import {redirect} from "@sveltejs/kit";
import { jwtVerify, createRemoteJWKSet } from "jose";
import { env } from "$env/dynamic/public";
const hankoApiUrl = env.PUBLIC_HANKO_API_URL;

const authenticatedUser = async (event) => {
    const { cookies } = event;
    const hanko = cookies.get("hanko");
    const JWKS = createRemoteJWKSet(
        new URL(`${hankoApiUrl}/.well-known/jwks.json`)
    );

    try {
        await jwtVerify(hanko ?? "", JWKS);
        return true;
    } catch {
        return false;
    }
};

async function first ({ event, resolve }) {
    const verified = await authenticatedUser(event);

    if (event.url.pathname.startsWith("/admin") && !verified) {
        throw redirect(303, "/");
    }

    const response = await resolve(event);
    return response;
};
export const handle = sequence(first);
