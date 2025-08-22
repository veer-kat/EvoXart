"use client";

import InfiniteMenu from '../components/InfiniteMenu';

const items = [
  {
    image: '/anna.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/anna_rjawfv.jpg',
    title: 'Kokonut',
    description: 'A shell-crafted, tropical, coastal creation.'
  },
  {
    image: '/ariana.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/ariana_hntqw4.jpg',
    title: 'Ariana Grande',
    description: '2016, was pretty successful for Ariana Grande'
  },
  {
    image: '/coc1.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/coc1_wjvcdt.jpg',
    title: 'Clash of Clans',
    description: 'The Og Barbarian!'
  },
  {
    image: 'coc2.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836731/coc2_hvdrt2.jpg',
    title: 'COC troops',
    description: 'Minion & Baby Dragon FTW'
  },
  {
    image: 'deep.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/deep_izdvon.jpg',
    title: 'Don\'t look up',
    description: 'Just playing with some colors'
  },
  {
    image: 'doodle.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/doodle_bqm1kd.jpg',
    title: 'Doodle days',
    description: 'Fun, incomplete doodles🫣'
  },
  {
    image: 'eyes.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836733/eyes_ksjlkc.jpg',
    title: 'True art',
    description: 'Udemy teaches a lot ig'
  },
  {
    image: 'groot.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/groot_ak2ka7.jpg',
    title: 'Marvel Groot',
    description: 'I am Groot!'
  },
  {
    image: 'intermediate.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836731/intermediate_w17kun.jpg',
    title: 'Intermediate exam',
    description: 'Verification of art skills is important'
  },
  {
    image: 'kaiju.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/kaiju_ufliom.jpg',
    title: 'Kaiju',
    description: 'One of my favourite Sci-Fi movie; Pacific Rim'
  },
  {
    image: 'man.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/man_fxam42.jpg',
    title: 'Normal man',
    description: 'Depiction of a normal day'
  },
  {
    image: 'pokemon.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836731/pokemon_e015ab.jpg',
    title: 'Pokemon',
    description: 'Gotta catch \'em all!'
  },
  {
    image: 'pug.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836732/pug_xtyr4g.jpg',
    title: 'Sophie the pug',
    description: 'My first pet ever'
  },
  {
    image: 'shadows.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836731/shadows_bwwzkq.jpg',
    title: 'From the abyss',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'stilllife.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836731/stilllife_ghyuqb.jpg',
    title: 'Still life',
    description: 'Timepass activity'
  },
  {
    image: 'surrealism.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836731/surrealism_fxfrsn.jpg',
    title: 'Surrealism',
    description: 'Trap into my \neyes watching reels?'
  },
  {
    image: 'thanos.jpeg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836731/thanos_gsfgq2.jpg',
    title: 'Thanos',
    description: 'Malnourished Thanos \nfrom another multiverse😅'
  },
  {
    image: 'Skeleton.jpg',
    link: 'https://res.cloudinary.com/dtzzrtibc/image/upload/v1755836893/Skeleton_irlh7p.jpg',
    title: 'Digital art',
    description: 'First digital art, Skeleart?'
  }
];

export default function Page() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <InfiniteMenu items={items}/>
    </div>
  );
}