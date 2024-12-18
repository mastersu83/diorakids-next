import Link from "next/link";
import { useModelStore } from "@/store/models";

export const CustomBreadcrumbs = () => {
  const { setEditMode, category, collection, model } = useModelStore(
    (state) => state
  );
  return (
    <div className="flex h-12 justify-between">
      <div className="flex h-12">
        <div>
          <Link className="hover:underline" href="/">
            Главная
          </Link>
          <span className="mx-2">/</span>
        </div>
        <div>
          <Link className="hover:underline" href="/">
            {category}
          </Link>
          <span className="mx-2">/</span>
        </div>
        <div>
          <Link className="hover:underline" href="/">
            {collection}
          </Link>
          <span className="mx-2">/</span>
        </div>
        <span className="opacity-60">{model.name}</span>
        {/*{breadcrumbs.map((item, i) =>*/}
        {/*  item?.href ? (*/}
        {/*    <div key={item.id}>*/}
        {/*      <Link className="hover:underline" href={item.href}>*/}
        {/*        {item.title}*/}
        {/*      </Link>*/}
        {/*      <span className="mx-2">/</span>*/}
        {/*    </div>*/}
        {/*  ) : (*/}
        {/*    <span key={item.id} className="opacity-60">*/}
        {/*      {item.title}*/}
        {/*    </span>*/}
        {/*  )*/}
        {/*)}*/}
      </div>
      <Link href="/admin" onClick={() => setEditMode(true)}>
        Edit
      </Link>
    </div>
  );
};
