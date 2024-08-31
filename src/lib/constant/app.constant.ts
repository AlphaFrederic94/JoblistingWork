import { IconProps } from '@/components/ui/icon';
import APP_PATHS from '@/config/path.config';

export const GITHUB_REPO = 'https://github.com/AlphaFrederic94';
export const navbar = [
  { id: 1, label: 'Jobs', path: APP_PATHS.JOBS },
  {
    id: 2,
    label: 'Manage',
    path: APP_PATHS.MANAGE_JOBS,
    roleRequired: 'ADMIN',
  },
  // todo: add actual path
  { id: 3, label: 'Internship', path: '/' },
  { id: 4, label: 'Testimonials', path: '/' },
  { id: 5, label: 'FAQs', path: '/' },
];

export const socials: {
  href: string;
  label: string;
  icon: IconProps['icon'];
}[] = [
  {
    icon: 'youtube',
    label: 'Youtube',
    href: 'https://www.youtube.com',
  },
  { icon: 'twitter', label: 'Twitter', href: 'https://x.com' },
  { icon: 'github', label: 'Github', href: 'https://github.com' },
  {
    icon: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com',
  },
  {
    icon: 'linkedin',
    label: 'Linkedin',
    href: 'https://www.linkedin.com',
  },
  {
    icon: 'telergam',
    label: 'Telegram',
    href: '',
  },
];

export const footerLinks = {
  '100xlinks': [
    { label: 'App', href: '' },
    { label: 'Projects', href: '' },
    { label: 'Reports', href: '' },
  ],
  '100xlegal': [
    { label: 'Privacy Policy', href: '' },
    { label: 'Terms of Service', href: '' },
    { label: 'Desclaimer', href: '' },
  ],
};
