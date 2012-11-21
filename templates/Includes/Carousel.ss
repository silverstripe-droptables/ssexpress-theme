<div id="myCarousel" class="carousel slide">
	<!-- Carousel items -->
	<div class="carousel-inner">
		<% loop VisibleCarouselItems %>
			<div class="<% if First %>active <% end_if %>item">
				<a<% if Link %> href="$Link.Link"<% end_if %>>
					$Image.SetRatioSize(670, 503)
					<% if Caption %>
						<div class="carousel-caption">
							<% if Title %>
								<h4>$Title</h4>
							<% end_if %>
							<p>$Caption</p>
						</div>
					<% end_if %>
				</a>
			</div>
		<% end_loop %>
	</div>
	<% if VisibleCarouselItems && VisibleCarouselItems.Count != 1 %>
		<!-- Carousel nav -->
		<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
		<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
		<div id="pause"><div class="btn"><span class="icon">&#xf04c;</span></div></div>
	<% end_if %>
</div>