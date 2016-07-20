<template>
  <div id="userinfoConfirm" class="container">
    <div class="tableList">
      <ul>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>ご契約者名</span><small>Name</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.name" placeholder="userinfo.name"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>ご契約者名（フリガナ）</span><small>Name(katakana)</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.name_katakana" placeholder="userinfo.name_katakana"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>ご契約者名（ローマ字）</span><small>Name</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.name_roman" placeholder="userinfo.name_roman"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>生年月日</span><small>Date of Birp</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.dateOfBirth" placeholder="userinfo.dateOfBirth"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>性別</span><small>Gender</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.gender" placeholder="userinfo.gender"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>住所</span><small>Address</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.address" placeholder="userinfo.address"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>電話</span><small>Phone Number</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.phoneNumber" placeholder="userinfo.phoneNumber"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>FAX</span><small>FAX Number</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.faxNumber" placeholder="userinfo.faxNumber"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>昼間連絡先電話番号</span><small>Phone Number in Business</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.phoneNumberInBusiness" placeholder="userinfo.phoneNumberInBusiness"></p>
        </li>
        <li class="col-xs-12 col-sm-3 tlth">
          <p><span>登録メールアドレス</span><small>Mail Address</small></p>
        </li>
        <li class="col-xs-12 col-sm-9 tltd">
          <p><input type="text" class="form-control" v-model="userinfo.mailAddress" placeholder="userinfo.mailAddress"></p>
        </li>
      </ul>
    </div>
    <div class="">
      <a v-link="{ path: '/UserInfoConfirm' }">UserInfo Confirm</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoConfirm',
  props: {
    userinfo: Object
  },
  data: function () {
    return {
      userinfo: {}
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="sass">

$small:  "only screen and (max-width:767px)";
$middle: "only screen and (min-width:768px)";

.tableList {
  ul {
    border: solid 1px #ddd;
    border-bottom: none;
    display: inline-block;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }
  li {
    border-bottom: solid 1px #ddd;
    padding-top: 4px;
    padding-bottom: 4px;
    &.tlth {
      font-weight: bold;
      p {
        margin-bottom: 0px;
      }
    }
    @media #{$small} {
      &.tlth {
        border-bottom: none;
        span, small {
          display: inline;
        }
        span {
          margin-right: 8px;
        }
      }
      &.tltd {
        border-bottom: solid 1px #ddd;

      }
    }
    @media #{$middle} {
      height: 56px;

      &.tlth {
        border-bottom: solid 1px #ddd;
        span, small {
          display: block;
        }
      }
      &.tltd {
        border-bottom: solid 1px #ddd;

      }
    }
  }
}
</style>
