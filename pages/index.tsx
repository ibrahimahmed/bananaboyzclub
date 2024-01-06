import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { Fragment, useRef } from 'react';
import Head from 'next/head';

const DynamicHeader = dynamic(() => import('@/components/Header'), {
    ssr: false,
});
const DynamicBanner = dynamic(() => import('@/components/Banner'), {
    ssr: false,
});
const DynamicArtSlider = dynamic(() => import('@/components/ArtSlider'), {
    ssr: false,
});
const DynamicRoadMap = dynamic(() => import('@/components/Roadmap'), {
    ssr: true,
});
const DynamicTeam = dynamic(() => import('@/components/Team'), {
    ssr: true,
});
const DynamicFaq = dynamic(() => import('@/components/Faq'), {
    ssr: true,
});

const Home: NextPage = () => {
    const artSlider = useRef<HTMLDivElement>(null);
    const roadmap = useRef<HTMLDivElement>(null);
    const team = useRef<HTMLDivElement>(null);
    const faq = useRef<HTMLDivElement>(null);
    return (
        <Fragment>
            <Head>
                <meta name="author" content="MNM" />
                <meta name="description" content="Bananas" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DynamicHeader Arts={artSlider} Roadmap={roadmap} Team={team} Faq={faq} />
            <DynamicBanner />
            <DynamicArtSlider Location={artSlider} />
            <DynamicRoadMap Location={roadmap} />
            <DynamicTeam Location={team} />
            <DynamicFaq
                Location={faq}
                items={[
                    {
                        title: 'What are Bananas on SEI?',
                        content:
                            'Bananas On SEI is a collection of 5555 unique NFTs. Each NFT is unique and resides on SEI.',
                    },
                    {
                        title: 'How to get WL/OG? What are the conditions for this ?',
                        content: `<ul>
                      <li>WL can be earned by communication, engagement, helping others, being kind, etc. </li>
                      <li>Make fan-art and memes.</li>
                      <li>Also feel free to join giveaways.</li>
                    </ul>
                    <br>
                    
                    <p>Spamming will not help!</p>
                    `,
                    },
                    {
                        title: 'How many mints per wallet ?',
                        content: `<p>1</p>`,
                    },
                    {
                        title: "What's mint price ?",
                        content: `<p>Free For WL , 11 SEI For Public</p> `,
                    },
                    {
                        title: 'When/Where mint?',
                        content: `<p>On the SEI Network.</p> `,
                    },
                    {
                        title: 'What will the supply be ?',
                        content: `<p>Supply is 5555</p> `,
                    },
                    {
                        title: 'Will there be public sale, or just whitelist?',
                        content: `<p>4444 Whitelist , 1111 Public</p> `,
                    },
                    {
                        title: 'Wen Mint?',
                        content: `<p>TBA</p> `,
                    }
                ]}
            />
        </Fragment>
    );
};

export default Home;
