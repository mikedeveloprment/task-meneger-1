import React from "react";
import clas from "./Home.module.scss";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

const Home = () => {
	const width = useSelector((state) => state.count.width);

	return (
		<div
			style={{
				width: `calc(100% - ${width + 1}px)`,
			}}
			className={clas.wrapper}
		>
			<Header />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
			pariatur eos deserunt ea labore atque nam odio, accusamus eveniet quas
			ratione veritatis officia dignissimos cum necessitatibus magni suscipit.
			Atque ullam inventore vero architecto, provident alias quod ad delectus
			est quia dolorum praesentium distinctio fuga nesciunt iste repellat error
			adipisci ipsa, at molestiae odit laudantium beatae ut. Cum vitae corporis
			inventore atque possimus, consectetur deleniti accusantium perferendis
			iusto alias reprehenderit saepe doloribus necessitatibus non officiis,
			nesciunt dolores! Labore eligendi exercitationem obcaecati incidunt
			similique cumque ratione veritatis voluptatem ipsum, illo eos, reiciendis
			fugiat aliquam minima. Cum praesentium autem maiores exercitationem modi,
			repudiandae omnis quae, amet nesciunt, veritatis corporis debitis in atque
			alias voluptas assumenda soluta! Obcaecati excepturi accusantium veniam
			possimus aspernatur harum! Quae, nostrum? Esse, nemo fugit minus
			exercitationem, deleniti voluptatum corporis facere facilis error vitae
			earum asperiores iure consequatur. Consequatur quibusdam eaque obcaecati
			temporibus accusantium sunt ut assumenda, quae nostrum recusandae
			voluptatum consectetur id aspernatur veritatis aperiam esse dolore
			expedita enim fuga ab? Similique tempora dolorem vel cumque, temporibus
			quis voluptatum praesentium provident facere perspiciatis veritatis nemo
			repellat fugiat repudiandae blanditiis laudantium hic omnis nulla, atque
			dolor sapiente porro, sed nobis. Necessitatibus itaque quo tempora minima
			sapiente suscipit velit, repudiandae, sunt laboriosam iure quasi nobis
			tempore dicta perferendis, sed ut vel ipsa ab minus magni mollitia!
			Pariatur explicabo ut cupiditate ad a, molestiae, sapiente, molestias
			alias amet eveniet deleniti optio tempore doloremque nesciunt dignissimos
			enim esse? Beatae numquam consequuntur repudiandae ullam ratione quaerat
			sit eos. Itaque impedit facere ab eum ipsam soluta molestias obcaecati
			magni est quaerat placeat, sit maiores alias esse asperiores laudantium
			tenetur rem eaque magnam at? Dicta voluptate officiis asperiores, ratione
			vitae qui eligendi odio sapiente doloribus in aperiam iste aspernatur
			beatae dolorum error eius laudantium veritatis! Dignissimos eveniet error
			voluptate, ut sunt tempora nesciunt dolorem mollitia reiciendis fugiat
			illo nisi neque impedit optio id sapiente illum, nobis eaque. Modi alias
			provident officia quia sapiente? Atque incidunt magnam qui harum
			consequatur fugiat, corporis eveniet cupiditate dolorem ullam maiores
			exercitationem ipsam deserunt repudiandae placeat dicta itaque
			perspiciatis laboriosam veniam saepe accusantium! Nesciunt magni et sint
			hic laboriosam? Quas ut corporis adipisci sint assumenda optio molestiae!
			Illum voluptatem corrupti molestias harum! Maxime, tempora veritatis saepe
			exercitationem impedit fugit id repellendus, debitis voluptas vel,
			eligendi aliquam quibusdam cumque! Ab, omnis adipisci ut eveniet similique
			pariatur placeat inventore quaerat? Iste necessitatibus exercitationem
			fuga delectus. Iusto dolorem alias earum nihil illo magni tempora
			repudiandae aut atque veniam, id hic aliquam, pariatur minus expedita
			recusandae corporis excepturi repellendus, sunt natus modi quae! Porro
			nesciunt minima temporibus architecto unde perspiciatis ipsa, illum
			aspernatur, distinctio quasi molestias nobis maiores! Animi sit
			dignissimos omnis ipsa, ea, atque laudantium quas nam eligendi veritatis
			saepe, eius rerum et voluptate adipisci placeat aliquid cum? Enim,
			possimus saepe tempore recusandae hic, fugit ipsum eaque sint iste dolor
			accusantium modi id nam voluptate eius laboriosam officiis ratione.
			Dolorum sint rem velit voluptatem maiores fuga et eum minima perspiciatis
			laudantium cupiditate, ipsum facilis ipsam temporibus magnam quae
			exercitationem dignissimos nemo harum, architecto dolore similique ad
			saepe! Rerum quas totam libero repudiandae et, sunt ducimus! Deserunt
			neque ad facilis veniam nam ullam, fuga iste natus. Quidem sequi vero odit
			quam atque fuga eos esse beatae fugit illo tempore praesentium suscipit
			facere, ut iste? Animi autem tempora nostrum optio quia esse amet sequi
			odit omnis quisquam dolore pariatur atque praesentium facilis iure
			assumenda rem dolores, ipsam voluptatem? Quos delectus officia tenetur
			officiis ex. Voluptatibus iste obcaecati illum in illo. Ex minima
			repellendus suscipit dolor atque nostrum deserunt mollitia autem expedita
			commodi culpa, aspernatur, quam ullam cum quaerat facere, facilis illo
			ipsam minus totam ea at. Quaerat excepturi accusantium doloremque nulla
			optio reiciendis corporis atque, harum adipisci aliquam qui dicta debitis
			laboriosam, alias blanditiis facilis voluptatem deserunt repellat quas
			consectetur laborum esse dolor? Laboriosam pariatur molestiae, accusamus
		</div>
	);
};

export default Home;
