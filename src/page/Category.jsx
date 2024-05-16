import Navbar from "../components/Navbar/Navbar";

import List1 from "../page/Lists/List";
import List2 from "../page/Lists/List1";
import List3 from "../page/Lists/List2";

function Category() {
  return (
    <div>
      <Navbar />
      <div>
        <List1 />
        <List2 />
        <List3 />
      </div>
    </div>
  );
}

export default Category;
