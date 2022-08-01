export const Floor = () => (
  <>
    <div className="bg-[#383c50] w-full h-10 border-t-4 border-t-slate-500 border-b-4 border-b-[#050734]" />
    <img alt="ground" src="images/ground.png" />
  </>
);

export const Start = () => (
  <button
    onClick={() =>
      document.querySelector("#hello").scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    <img
      alt="start"
      className="mt-16 h-12"
      src="https://media-public.canva.com/Cd_OA/MAEZ0-Cd_OA/1/t.png"
    />
  </button>
);

export const Cloud = (props) => (
  <img
    {...props}
    alt="cloud"
    src="https://media-public.canva.com/SSTvg/MAE10bSSTvg/1/t.png"
  />
);

export const TreeA = (props) => (
  <img
    alt="tree"
    src="https://media-public.canva.com/RLVwY/MAEB2PRLVwY/1/t.png"
    {...props}
  />
);

export const TreeB = (props) => (
  <img
    {...props}
    alt="tree"
    src="https://media-public.canva.com/m1BRU/MAEB2Hm1BRU/1/t.png"
  />
);

export const Hero = (props) => (
  <img
    {...props}
    alt="hero"
    src="https://video-public.canva.com/VAFAiAYfF5Y/v/a61ddeff12.gif"
  />
);

export const Hearts = (props) => (
  <img
    {...props}
    alt="hearts"
    className="h-20 p-8 ml-auto"
    src="https://media-public.canva.com/Zdi40/MAEZ00Zdi40/1/t.png"
  />
);

export const Coin = (props) => (
  <img
    {...props}
    alt="coin"
    className="h-10 md:h-16"
    src="https://video-public.canva.com/VAFAiB4aGyU/v/bb9be8e13f.gif"
  />
);

export const Fire = (props) => (
  <img
    {...props}
    alt="fire"
    className="h-32"
    src="https://video-public.canva.com/VAFAiMSzymo/v/20b689ac5a.gif"
  />
);

export const Shield = (props) => (
  <img
    {...props}
    alt="shield"
    className="h-24 md:h-32"
    src="https://video-public.canva.com/VAFAiO63_K4/v/708440e6c1.gif"
  />
);

export const Sword = (props) => (
  <img
    {...props}
    alt="sword"
    className="h-24 md:h-32"
    src="https://video-public.canva.com/VAFAiKWKnFI/v/9ebc086b6d.gif"
  />
);

export const Cup = (props) => (
  <img
    {...props}
    alt="cup"
    className="h-24 md:h-32"
    src="https://video-public.canva.com/VAFAiN7oFAE/v/474e59c781.gif"
  />
);

export const Flower = (props) => (
  <img
    {...props}
    alt="flower"
    className="h-24 md:h-32"
    src="https://media-public.canva.com/_ou60/MAEB2B_ou60/1/t.png"
  />
);

export const Plant = (props) => (
  <img
    {...props}
    alt="plant"
    className="h-24 md:h-32"
    src="https://media-public.canva.com/Vz_9s/MAEB2HVz_9s/1/t.png"
  />
);

export const Chicken = (props) => (
  <img
    {...props}
    alt="chicken"
    className="h-24 md:h-32"
    src="https://media-public.canva.com/UNJro/MAEB2JUNJro/1/t.png"
  />
);
