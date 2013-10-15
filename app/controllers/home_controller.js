load('application');

action('index', function () {
  render({
    title: "Merybook"
  });
});
action('wall', function () {
	layout('wall')
  render({
    title: "Merybook"
  });
});