module.exports = function(app) {
  app.get('/app/demo', function (req, res, next) {
    return res.send({
      code: 0,
      data: {
        degree: 3,
        degreeStr: '本科',
        headUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=524329843,3308417969&fm=27&gp=0.jpg',
        expectList: [{
          expectId: 1,
          jobCategoryName: '技术',
          tradeName: '制药/医疗',
          willCityName: '上海市'
        }, {
          expectId: 1,
          jobCategoryName: '技术',
          tradeName: '制药/医疗',
          willCityName: '上海市'
        }],
        id: 2,
        inviteCount: 0,
        name: 'wxf',
        projectList: [{
          endTime: 1515487298000,
          endTimeStr: '2018-01-09',
          projectId: 1,
          projectName: 'crm管理系统',
          roleName: '后台开发',
          startTime: 1514882491000,
          startTimeStr: '2018-01-02'
        }, {
          projectId: 2,
          projectName: '日志分析统计',
          roleName: '后台开发'
        }],
        schoolName: '上海第二工业大学',
        specialty: '软件工程',
        viewCount: 0,
        workList: [{
          categoryId: 1,
          categoryName: '技术',
          companyName: '上海微客来软件技术有限公司',
          endTime: 1516032000000,
          endTimeStr: '2018-01-16',
          startTime: 1514131200000,
          startTimeStr: '2017-12-25',
          workId: 2
        }, {
          categoryId: 1,
          categoryName: '技术',
          companyName: '上海魅力惠电子商务有限公司',
          workId: 3
        }]
      }
    });
  });
};
