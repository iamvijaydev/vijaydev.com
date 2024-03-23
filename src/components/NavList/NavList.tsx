import { Link, AnchorAttributes } from 'main';

export type NavListProps = {
  list: AnchorAttributes[];
  ulClassName?: string;
  liClassName?: string;
}

export const NavList = ({
  list,
  ulClassName = '',
  liClassName = ''
}: NavListProps) => {
  return (
    <ul role="navigation" className={ulClassName}>
      {
        list.map(item => (
          <li className={liClassName} key={item.id}>
            <Link {...item} className="text-label" />
          </li>
        ))
      }
    </ul>
  )
}