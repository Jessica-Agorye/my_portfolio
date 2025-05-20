import { useEffect } from "react";

const LottiePlayer = () => {
  useEffect(() => {
    // Check if script is already added
    if (!document.querySelector('script[src*="dotlottie-player"]')) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <dotlottie-player
            src="https://lottie.host/0685d063-8c64-4270-a0dc-2bda2ef9188e/lMAxgaySGG.lottie"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></dotlottie-player>
        `,
      }}
    />
  );
};

export default LottiePlayer;
