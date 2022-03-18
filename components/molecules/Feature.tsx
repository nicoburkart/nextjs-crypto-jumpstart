import Link from 'next/link';
import { SubTitle } from '../atoms/Typography';

type Props = {
  title: string;
  desc: string;
  icon?: string;
  buttonUrl?: string;
};

export const Feature = ({ title, desc, icon, buttonUrl }: Props) => {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      {icon ? (
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
          <img src={icon} alt="" />
        </div>
      ) : (
        ''
      )}

      <div className="flex-grow">
        <SubTitle>{title}</SubTitle>
        <p className="leading-relaxed text-base">{desc}</p>
        {buttonUrl ? (
          <Link href={buttonUrl}>
            <a className="mt-3 text-gray-50 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
