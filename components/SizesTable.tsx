import styles from "./SizesTable.module.scss";

interface ISizesTable {
  props: any;
}

export const SizesTable = ({ props }: ISizesTable) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="text-lg">Таблица размеров</div>
      <div className="flex gap-x-5">
        <div className="w-20 h-20 flex items-center justify-center border-2 border-customBlue rounded-2xl">
          <span>56</span>
        </div>
        <div className="w-20 h-20 flex items-center justify-center border-2 border-customBlue rounded-2xl">
          <span>62</span>
        </div>
        <div className="w-20 h-20 flex items-center justify-center border-2 border-customBlue rounded-2xl">
          <span>68</span>
        </div>
        <div className="w-20 h-20 flex items-center justify-center border-2 border-customBlue rounded-2xl">
          <span>74</span>
        </div>
        <div className="w-20 h-20 flex items-center justify-center border-2 border-customBlue rounded-2xl">
          <span>80</span>
        </div>
      </div>
    </div>
  );
};
