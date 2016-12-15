var AV = require('leanengine');
var _ = require('underscore');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(req, res) {
  console.log(req)
  res.success('Hello world!');
});

// 从 content 中查找 tag 的正则表达式
var tagRe = /#(\w+)/g

/**
 * Todo 的 beforeSave hook 方法
 * 将 content 中的 #<tag> 标记都提取出来，保存到 tags 属性中
 */
AV.Cloud.beforeSave('Todo', function(req, res) {
  var todo = req.object;
  var content = todo.get('content');
  var tags = todo.get('content').match(tagRe);
  tags = _.uniq(tags);
  todo.set('tags', tags);
  res.success();
})

module.exports = AV.Cloud;
