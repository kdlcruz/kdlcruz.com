'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import type { Container } from "@tsparticles/engine"
import { loadTrianglesPreset } from "@tsparticles/preset-triangles"
import { loadSnowPreset } from '@tsparticles/preset-snow'

const d = new Date()
const month = d.getMonth()
const isBer = month >= 8

export const BgParticles = () => {
  

  const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            if (isBer) {
              await loadSnowPreset(engine)
            } else {
              await loadTrianglesPreset(engine)
            }
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return init ? <Particles id="tsparticles" options={{ preset: isBer ? 'snow' : 'triangles', fullScreen: { enable: true }, style: { opacity: isBer ? '0.7' : '0.2' } }} particlesLoaded={particlesLoaded}/> : null
}
