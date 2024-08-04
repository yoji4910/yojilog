import { PrismicLink } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { NavigationDocument } from "prismicio-types";

export const Navigation = ({
  navigationData,
}: {
  navigationData: NavigationDocument<string>;
}): JSX.Element => {
  return (
    <nav className="font-bold text-xl self-center">
      <ul>
        {isFilled.group(navigationData.data.menu_items) &&
          navigationData.data.menu_items.map((item) => {
            return (
              <li key={item.label}>
                <PrismicLink field={item.link}>{item.label}</PrismicLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
