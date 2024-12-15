import Link from "next/link";
import { useModelStore } from "@/store/models";

interface ICustomBreadcrumbs {}

const breadcrumbs = [
  { id: 1, title: "Главная", href: "/" },
  { id: 2, title: "Комбинезоны", href: "/" },
  { id: 4, title: "Львята", href: "/" },
  { id: 3, title: "Комбинизон слип для новорожденного нательный" },
];

export const CustomBreadcrumbs = () => {
  const { setEditMode } = useModelStore((state) => state);
  return (
    <div className="flex h-12 justify-between">
      <div className="flex h-12">
        {breadcrumbs.map((item, i) =>
          item?.href ? (
            <div key={item.id}>
              <Link className="hover:underline" href={item.href}>
                {item.title}
              </Link>
              <span className="mx-2">/</span>
            </div>
          ) : (
            <span key={item.id} className="opacity-60">
              {item.title}
            </span>
          )
        )}
      </div>
      <Link href="/admin" onClick={() => setEditMode(true)}>
        Edit
      </Link>
    </div>
  );
};
