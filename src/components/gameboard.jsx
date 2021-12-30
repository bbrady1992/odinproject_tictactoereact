import { Gameboard } from "../models/gameboard"

export const GameboardComponent = () => {
  return (
    <div id="gameboard-container">
      <div id="gameboard">
        <div class="square" id="space-1"></div>
        <div class="square" id="space-2"></div>
        <div class="square" id="space-3"></div>
        <div class="square" id="space-4"></div>
        <div class="square" id="space-5"></div>
        <div class="square" id="space-6"></div>
        <div class="square" id="space-7"></div>
        <div class="square" id="space-8"></div>
        <div class="square" id="space-9"></div>
      </div>
    </div>
  )
}