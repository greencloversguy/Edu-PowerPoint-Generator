$(function(){
	$("#maker").click(function() {
		var pptx = new PptxGenJS();
		pptx.setLayout('LAYOUT_WIDE');

		pptx.defineSlideMaster({
		  title: 'MASTER_SLIDE',
		  bkgd:  'FFFFFF',
		  objects: [
			{ 'line':  { x: 3.5, y:1.00, w:6.00, line:'0088CC', lineSize:5 } },
			{ 'rect':  { x: 0.0, y:5.30, w:'100%', h:0.75, fill:'F1F1F1' } },
			{ 'text':  { text:'Status Report', options:{ x:3.0, y:5.30, w:5.5, h:0.75 } } },
			{ 'image': { x:11.3, y:6.40, w:1.67, h:0.75, path:'images/logo.png' } }
		  ],
		  slideNumber: { x:0.3, y:'90%' }
		});

		var slide = pptx.addNewSlide('MASTER_SLIDE');
		slide.addText('How To Create PowerPoint Presentations with JavaScript', { x:0.5, y:0.7, font_size:18 });

		pptx.save();
	})
})