import App from './App.js';
import { qs } from './util/helper.js';

new App(qs('#app'));

/* 
  <section class="d-flex justify-center mt-5">
        <form>
          <fieldset>
            <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
            <p>
              5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
              예시) EAST, WEST, SOUTH, NORTH
            </p>
            <div class="d-flex">
              <input type="text" class="w-100 mr-2" placeholder="자동차 이름" />
              <button type="button" class="btn btn-cyan">확인</button>
            </div>
          </fieldset>
          <fieldset>
            <p>시도할 횟수를 입력해주세요.</p>
            <div class="d-flex">
              <input type="number" class="w-100 mr-2" placeholder="시도 횟수" />
              <button type="button" class="btn btn-cyan">확인</button>
            </div>
          </fieldset>
        </form>
      </section>
      <section class="d-flex justify-center mt-5">
        <div class="mt-4 d-flex">
          <div class="mr-2">
            <div class="car-player">EAST</div>
            <div class="forward-icon mt-2">⬇️️</div>
            <div class="forward-icon mt-2">⬇️️</div>
          </div>
          <div class="mr-2">
            <div class="car-player">WEST</div>
            <div class="forward-icon mt-2">⬇️️</div>
          </div>
          <div class="mr-2">
            <div class="car-player">SOUTH</div>
            <div class="d-flex justify-center mt-3">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>
          </div>
          <div class="mr-2">
            <div class="car-player">NORTH</div>
            <div class="d-flex justify-center mt-3">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="d-flex justify-center mt-5">
        <div>
          <h2>🏆 최종 우승자: EAST, WEST 🏆</h2>
          <div class="d-flex justify-center">
            <button type="button" class="btn btn-cyan">다시 시작하기</button>
          </div>
        </div>
      </section>
      */
