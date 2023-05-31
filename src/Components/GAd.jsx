import { useEffect } from "react";

const GAd = () => {
    useEffect(()=>{
         (adsbygoogle = window.adsbygoogle || []).push({});
    },[])

    return(        
        <ins class="adsbygoogle"
            style={{
                display: "block",
                textAlign: "center"
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2411170268373480"
            data-ad-slot="7033237977"></ins>
    )
}

export default GAd;