import classNames from "classnames";

import type { MainProps } from "./main.interface";

import styles from "./main.module.css";

export const Main = (props: MainProps) => {
  const { className, children } = props;
  return <main className={classNames(styles.main, className)}>{children}</main>;
};
