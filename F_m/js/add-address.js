  //省市区：
  initComplexArea('seachprov', 'seachcity', 'seachdistrict', area_array, sub_array, '44', '0', '0');

  //得到地区码
  function getAreaID(){
    var area = 0;          
    if($("#seachdistrict").val() != "0"){
      area = $("#seachdistrict").val();                
    }else if ($("#seachcity").val() != "0"){
      area = $("#seachcity").val();
    }else{
      area = $("#seachprov").val();
    }
    return area;
  }

  //根据地区码查询地区名
  function getAreaNamebyID(areaID){
    var areaName = "";
    if(areaID.length == 2){
      areaName = area_array[areaID];
    }else if(areaID.length == 4){
      var index1 = areaID.substring(0, 2);
      areaName = area_array[index1] + " " + sub_array[index1][areaID];
    }else if(areaID.length == 6){
      var index1 = areaID.substring(0, 2);
      var index2 = areaID.substring(0, 4);
      areaName = area_array[index1] + " " + sub_array[index1][index2] + " " + sub_arr[index2][areaID];
    }
    return areaName;
  }
  //$.errorTip("手机号不能为空");
  $('[data-selector="submit"]').click(function(event) {
    var name = $('input[name="name"]').val(),
        mobile = $('input[name="mobile"]').val(),
        address = $('.address').text(),
        detailed = $('input[name="detailed"]').val(),
        post = $('input[name="post"]').val(),
        phone = /^1\d{10}$/;
    //地区码
    var areaID = getAreaID();
    //地区名
    var areaName = getAreaNamebyID(areaID) ;
    if (!name) {
      $.errorTip("收件人姓名不能为空");
      return false;
    }
    if (!mobile) {
      $.errorTip("收件人手机号不能为空");
      return false;
    }
    if (!phone.test(mobile)) {
      $.errorTip("手机号输入不正确");
      return false;
    }
    if(areaID == ''){
      $.errorTip("选择地区不能为空");
      return false;
    }
    if(!detailed){
      $.errorTip("详细地址不能为空");
      return false;
    }
    $.ajax({
      url:"",
      type:"GET",
      data:{},
      cache:false,
      dataType:"json",
      success:function(data){
        if(data.flag == 1){
          
        }
      }
    });
  });


