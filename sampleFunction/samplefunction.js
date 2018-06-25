function getPageSpreed(currentPage){
	var currentSpread;
	switch (currentPage % 2){
		case 0:
			// чётная страница (правая в развороте)
			console.log('чётная', currentPage);

			currentSpread = currentPage / 2;
			return currentSpread;
		break;
		
		default:
			// не чётная страница (левая в развороте)
			console.log('не чётная', currentPage);
			
			currentSpread = currentPage * 2;
			return currentSpread;
		break;
	}
}