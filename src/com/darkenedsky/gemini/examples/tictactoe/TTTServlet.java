package com.darkenedsky.gemini.examples.tictactoe;
import com.darkenedsky.gemini.Library;
import com.darkenedsky.gemini.Player;
import com.darkenedsky.gemini.service.GeminiService;
import com.darkenedsky.gemini.service.GeminiServlet;


public class TTTServlet extends GeminiServlet<TTTCharacter, Player, TTTGame> {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3201080529273719869L;

	@Override
	public void init() { 
		try {
 		 	service = new GeminiService<TTTCharacter, Player, TTTGame>(TTTGame.class, Player.class, new Library(), "tictactoe.xml");
		}
		catch (Exception x) { 
			x.printStackTrace();
		}
	}
}
