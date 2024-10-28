import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Banner Home + Nghe Nhiều */}
      <Section1 />

      {/* Section 2: Danh Mục Nổi Bật */}
      <Section2 />

      {/* Section 3: Ca Sĩ Nổi Bật */}
      <Section3 />
    </>
  );
}