import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "text-grey-dark tracking-tighter my-12 text-6xl md:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
};


export const HeroSmallerTitle = ({ children, className }: HeroElementProps) => {
	return (
	  <h1
		className={classNames(
		  " my-6 tracking-tighter text-4xl md:text-4xl",
		  className
		)}
	  >
		{children}
	  </h1>
	);
  };

  
export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        "mb-12 text-2-gradient text-lg text-grey-dark md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={classNames("text-center pb-12", className)}>{children}</div>;
};