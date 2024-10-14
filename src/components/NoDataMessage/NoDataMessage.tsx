import classnames from "classnames";
import { ReactNode, FC } from "react";

import classes from "./styles.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const NoDataMessage: FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div className={classnames(classes.root, className)}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
};

export default NoDataMessage;
