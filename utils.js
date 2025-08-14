//import { getEnv } from './funcoes';
import getEnv from './funcoes';

export async function getEnvStaticProps() {
    const { envTypeString } = await getEnv();
    return {
        props: {
            envTypeString
        }
    };
}

export default getEnvStaticProps;