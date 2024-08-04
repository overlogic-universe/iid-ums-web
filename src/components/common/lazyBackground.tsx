import { useInView } from 'react-intersection-observer';

interface LazyBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

const LazyBackground: React.FC<LazyBackgroundProps> = ({ src, className, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: inView ? `url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default LazyBackground;
