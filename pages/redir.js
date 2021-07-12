import Layout from '../components/Layout';
import { useRouter } from "next/router";
import {useEffect} from "react";

export default function Redir() {

    const router = useRouter();
    const { search } = router.query;

    useEffect(() => {
        router.push('/search_result?search=' + search);
    }, []);

    return <></>;

};