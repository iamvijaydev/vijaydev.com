import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { useState } from "react";
import { MobileBasicMenu } from "./MobileBasicMenu";
import { MobileRichMenu } from "./MobileRichMenu";

export const MobileMenu = () => {
  const [isMounted, setIsMounted] = useState(false);

  useIsomorphicEffect(() => {
    !isMounted && setIsMounted(true);
  });

  return (
    <div className="block md:hidden">
      {isMounted ? <MobileRichMenu /> : <MobileBasicMenu />}
    </div>
  );
};
