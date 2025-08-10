
export async function getEnv() {
    const envType = process.env.ENVIRONMENT_TYPE;
    const envTypeString = envType.toString();

    return {
        envTypeString
    };
}