import { useParams } from "react-router-dom";

export default function SearchVillas() {
    let { area } = useParams();
    return (<>ciao {area}</>)
}