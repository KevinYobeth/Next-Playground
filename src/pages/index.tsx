import confetti, { Options } from 'canvas-confetti';
import Button from '../components/Button';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const handleConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: Options) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <div className='flex items-center h-full justify-center'>
      <div className={styles.orb}></div>
      <div className={styles.orb}></div>
      <div className={styles.orb}></div>

      <div className='z-50 flex flex-col gap-5 py-16 px-24 bg-slate-200 backdrop-blur-sm bg-opacity-30 rounded-md'>
        <div className='text-center'>
          <h1 className='text-5xl'>Welcome to Kevin&apos;s</h1>
          <h1 className='text-6xl'>Playground</h1>
        </div>
        <Button className='mt-5' onClick={handleConfetti}>
          Click Me
        </Button>
      </div>
    </div>
  );
}
