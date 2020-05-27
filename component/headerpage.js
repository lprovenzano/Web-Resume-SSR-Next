import Head from 'next/head'

const HeadPage = ({title}) =>{
    return (
        <Head>
        
        <title>{title}</title>

        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="NET developer, specialized in distributed systems. Backend software developer. Luca Provenzano Resume"/>
        <meta name="author" content="Luca Provenzano"/>

        </Head>
    )
}

export default HeadPage;