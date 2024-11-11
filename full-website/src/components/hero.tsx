import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "text-grey-dark my-12 text-6xl md:text-8xl",
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
		  "text-grey-dark my-6 text-4xl md:text-4xl",
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
        "mb-12 text-lg text-grey-dark md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};