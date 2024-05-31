import Particles from "react-particles";
import  particleOption from "../../assets/particle";
import Header from "../../components/Certificate/header";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"
import Body from "../../components/Certificate/body";

export default function Certificate(){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
      }, []);
    
      const particlesLoaded = useCallback(async () => {
         console.log("Particles loaded!");
      }, []);
    
    return(
        <>
        <Particles
                   id="tsparticles"
                   init={particlesInit}
                   loaded={particlesLoaded}
                   options={particleOption}
        />
        <Header/>
        <Body/>
        </>
    )
}