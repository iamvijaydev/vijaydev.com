import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { useState } from "react";
import { DefaultBasicMenu } from "./DefaultBasicMenu";
import { DefaultRichMenu } from "./DefaultRichMenu";

export const DefaultMenu = () => {
  const [isMounted, setIsMounted] = useState(false);

  useIsomorphicEffect(() => {
    !isMounted && setIsMounted(true);
  });

  return (
    <div className="hidden md:block">
      {isMounted ? <DefaultRichMenu /> : <DefaultBasicMenu />}
    </div>
  );
};
