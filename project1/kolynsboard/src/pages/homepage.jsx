import React from "react"
import Badge from "../components/badge"

function Homepage() {
    return (
        <div>
            <h1>Welcome to Kolyn's Board!</h1>
            <h3>I make original, free tutorials and tools.</h3>
            <table className="content-table">
                <tbody>
                    <tr>
                        <td><Badge img_path="img/cs-icon.png"
                                    title="📖 Cyber Spatula"
                                    hardness="🧩 Vary 🧩"
                                    description="The one-place to go for reading all my blogs."
                                    link="https://cyberspatula.github.io/"/></td>
                        <td><Badge img_path="img/opd-icon.png" 
                                    title="📖 Oxford Picture Dictionary"
                                    hardness="🌶️🌶️🌶️"
                                    description="A completely free open source English Learning Tool based on The New Oxford Picture Dictionary."
                                    link="https://github.com/Kolyn090/oxford-picture-dictionary"/></td>
                        <td><Badge img_path="img/ctkalpha.png"
                                    title="🔨 CTK Color Picker Alpha"
                                    hardness="🌶️"
                                    description="An 8-digits hex code color picker, with alpha value, forked from CTK Color Picker. Written in Python."
                                    link="https://github.com/Kolyn090/CTkColorPickerAlpha"/></td>
                        <td><Badge img_path="img/clockdile.png"
                                    title="🔨 Clockdile"
                                    hardness="🌶️"
                                    description="Cute desktop pet! 🐊 Keeps track time & daily water consumption for you."
                                    link="https://github.com/Kolyn090/Clockdile"/></td>
                    </tr>
                    <tr>
                        <td><Badge img_path="img/talpia.png"
                                    title="🔨 Nonogram Solver"
                                    hardness="🌶️"
                                    description="Supports solving Nonogram puzzles, importing puzzles from images (Heavy digits-recognition stuff here), and exporting puzzles."
                                    link="https://cyberspatula.github.io/software-nonogram-solver-import-image/"/></td>
                        <td><Badge img_path="img/unity-modding.png"
                                    title="📖 Modding a Unity game"
                                    hardness="🌶️🌶️🌶️🌶️🌶️"
                                    description="Modding a unity game. Using Steam game Otherworld Legends as example. (English & Chinese)"
                                    link="https://github.com/Kolyn090/Otherworld-Legends-Mod"/></td>
                        <td><Badge img_path="img/keytouch.png"
                                    title="🔨 KeyTouchArcade"
                                    hardness="🌶️🌶️"
                                    description="With C-powered programmatically controllable virtual mouse, this arcade is built for BlueStacks emulator. Can integrate with Python."
                                    link="https://cyberspatula.github.io/vmulti-mice-showcase/"/></td>
                        <td><Badge img_path="img/svz.png"
                                    title="📖 AI-powered Samurai vs. Zombies"
                                    hardness="🌶️🌶️🌶️🌶️🌶️"
                                    description="Build an AI from scratch to play Samurai vs. Zombies Defense. From CG to RL."
                                    link="https://cyberspatula.github.io/svz-main/"/></td>
                    </tr>
                    <tr>
                        <td><Badge img_path="img/talpia-series.png"
                                    title="📖 Talpia"
                                    hardness="🌶️🌶️"
                                    description="Building a dot-pict-like pixel art editor, from scratch with Python. Originally posted on my Linkedin."
                                    link="https://cyberspatula.github.io/talpia-main/"/></td>
                        <td><Badge img_path="img/egg-inc-ios.png"
                                    title="📖 Break Egg Inc. with Python"
                                    hardness="🌶️🌶️"
                                    description="Building a bot to do prestiges for me in Egg Inc. with Python and iPhone Mirroring. Unlocking a new possibility of hacking iOS games."
                                    link="https://cyberspatula.github.io/egg-inc-iphone-mirroring/"/></td>
                        <td><Badge img_path="img/afk-battle-cat.jpg"
                                    title="📖 Your iPhone is the best Battle Cats Auto Battler"
                                    hardness="🌶️🌶️🌶️🌶️"
                                    description="Do you believe your iPhone is better than your cat PC in the Battle Cats? Watch my YouTube video."
                                    link="https://www.youtube.com/watch?v=pwu47d9wgiE"/></td>
                        <td><Badge img_path="img/51305.png"
                                    title="🔨 MH Turf War"
                                    hardness="🌶️🌶️🌶️🌶️"
                                    description="AI project for determining turf war results between different large monsters in Monster Hunter. (Random Forest & Neural Network) Image credit: Capcom"
                                    link="https://github.com/Kolyn090/MH-Turf-War"/></td>
                    </tr>
                    <tr>
                        <td><Badge img_path="img/github-io.png"
                                    title="📖 Building a personal blogging website"
                                    hardness="🌶️🌶️"
                                    description="A step-by-step guide for making your own github.io blogging website. I have also included the full template of Cyber Spatula in this tutorial."
                                    link="https://cyberspatula.github.io/software-cyber-spatula/"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Homepage
