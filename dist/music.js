if theme.aplayer && theme.aplayer.enable
	// 播放器容器
	.aplayer(data-id=theme.aplayer.id data-server="theme.aplayer.server" data-type="theme.aplayer.type" data-fixed="theme.aplayer.fixed" data-order="theme.aplayer.order" data-preload="theme.aplayer.preload")
	each item in theme.aplayer.css
		link(rel='stylesheet', href=item)
	each item in theme.aplayer.js
		script(src=item)