'use client'
import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/luan-rocha1/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/LuanRoch',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/luanroch_/',
    name: <RiInstagramFill />,
  },
];


const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials