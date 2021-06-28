import React from "react";
import { Link } from "react-router-dom";

const Order = () => {

  return (
    <main class="sub order wrapper">
      <aside>
        <h3>구매정보</h3>
        <a href="shoppingbag.html">장바구니</a>
        <a href="order_list.html">주문배송조회</a>
        <a href="mypage.html">마이페이지</a>
      </aside>
      <div class="content">
        <div class="breadscrumb">
          <a href="#">Home</a>
          <a href="#">구매정보</a>
          <a href="#">주문하기</a>
        </div>
        <div class="title">
          <h2>주문하기</h2>
          <p>주문하신 분의 정보와 배송받으실 곳의 정보를 입력해주시기 바랍니다.</p>
        </div>
        <section>
          <div class="table">
            <ul class="row">
              <li><img src="assets/images/thumbnails/01.jpg" alt="" /></li>
              <li>뷰티 트렌드</li>
              <li>16,000원</li>
              <li>1</li>
              <li>16,000원</li>
            </ul>
            <ul class="total">
              <li>
                <span>총 상품금액</span>
                <span>16,000</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </li>
              <li>
                <span>배송료</span>
                <span>2,500</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
                </svg>
              </li>
              <li>
                <span>최종 결제금액</span>
                <span>18,500</span>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3>주문하신 분 정보확인</h3>
          <ul class="inputs">
            <li>
              <span class="required">구매자명</span>
              <input type="text" value="홍길동" />
            </li>
            <li>
              <span class="required">이메일</span>
              <input type="email" value="hong@naver.com" />
            </li>
            <li class="phone">
              <span class="required">전화번호</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li class="phone">
              <span class="required">휴대폰</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li>
              <span class="required">주소</span>
              <input type="text" />
            </li>
          </ul>
        </section>
        <section>
          <h3>받으시는 분 정보확인</h3>
          <div class="checkbox">
            <input id="ch" type="checkbox" />
            <label for="ch">구매자 정보와 일치하면 체크하세요.</label>
          </div>
          <ul class="inputs">
            <li>
              <span class="required">받으시는 분</span>
              <input type="text" value="홍길동" />
            </li>
            <li>
              <span class="required">이메일</span>
              <input type="email" value="hong@naver.com" />
            </li>
            <li class="phone">
              <span class="required">전화번호</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li class="phone">
              <span class="required">휴대폰</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li class="address">
              <span class="required">주소</span>
              <input type="text" />
            </li>
            <li>
              <span class="required">요청사항</span>
              <input type="text" />
            </li>
            <li>
              <span class="required">결제방법</span>
              <input id="a" type="radio" checked="checked" />
              <label for="a">무통장 결제</label>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <span>입금예정일</span>
            <div class="selectbox">
              <select name="" id="">
                <option value="2021">2021</option>
              </select>
            </div>
            <div class="selectbox">
              <select name="" id="">
                <option value="06">06</option>
              </select>
            </div>
            <div class="selectbox">
              <select name="" id="">
                <option value="01">01</option>
              </select>
            </div>
            <div>
              <span>입금자명</span>
              <input type="text" value="홍길동" />
            </div>
          </div>
          <strong>계좌번호: 국민은행 054901-04-133407 (조규백)</strong>
          <div class="buttons">
            <button class="btn-main">결제하기</button>
          </div>
        </section>
      </div>
    </main>    
  )
}

export default Order