import { Box, Typography } from "@mui/material";
import SidebarApp from "./SidebarApp";
import useSidebar from "../../../hooks/layout/useSidebar";
import HeaderApp from "./HeaderApp";
import { StyledAdminContainer } from "../../../components/styles/StyledAdminContainer";
import { StyledAdminFooter } from "../../../components/styles/StyledAdminFooter";
import { StyledAdminContent } from "../../../components/styles/StyledAdminContent";
import FooterApp from "./FooterApp";

const PageAdminLayout = () => {
    const { collapsed, toggled, setShowSidebar, collapseDesktop } = useSidebar();

    return (
        <Box display="flex">
            <SidebarApp collapsed={collapsed} toggled={toggled} handleClickItem={collapseDesktop} />
            <StyledAdminContainer>
                <HeaderApp onClickMenu={setShowSidebar} />
                <Box sx={{ overflowY: "auto" }}>
                    <StyledAdminContent>
                        <Typography variant="h1">Bienvenido al sistema</Typography>
                        <Typography variant="h2">Subtitulo</Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aperiam maiores voluptas fugit recusandae earum officia dolore laudantium, illo repudiandae minus praesentium iure neque cumque ipsa ipsum? Facere, earum ratione.
                            Sequi atque voluptatem ex quasi illum consectetur nesciunt, laudantium voluptate quo similique accusantium vero minima asperiores esse quis, neque qui? Magnam, aliquid harum ipsa libero non ipsam nostrum aperiam ipsum.
                            Totam suscipit, officia eligendi rerum perspiciatis inventore et exercitationem eos nihil dolorem odio voluptatum modi deleniti maiores. Quis, expedita facilis sunt beatae, animi quaerat molestiae cupiditate amet, vel aliquam non?
                            Culpa dolor beatae, quo magnam corporis vitae, non voluptatem sunt recusandae enim esse molestiae, atque corrupti et consequuntur maiores magni quos accusantium deserunt voluptatibus tempora aliquid odit dolorum? Quisquam, atque.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus repellendus ipsum deleniti ullam quasi praesentium voluptas facere? Molestiae facilis animi alias enim consequatur aspernatur cupiditate, sunt sequi accusantium rerum?
                            Facilis debitis iure possimus, quos quas neque reprehenderit sit excepturi modi, et fugit veniam placeat eaque, ratione provident natus assumenda earum omnis voluptates eligendi! Excepturi aliquam laudantium placeat consequuntur optio.
                            Eum similique molestias accusamus. Facere dolores vel hic debitis. Sunt nostrum totam maiores vel illum minima pariatur explicabo tempore, repellat consequuntur sit sint, quaerat possimus corrupti eum obcaecati dolor commodi.
                            Distinctio, temporibus. Quo illum praesentium dicta inventore ipsam perferendis molestiae a laboriosam veniam non asperiores, eum quasi similique, deserunt corrupti totam reprehenderit ea. Aspernatur vel reiciendis veritatis! Aperiam, illo quia?
                            Perspiciatis, fuga architecto expedita, recusandae rerum perferendis eaque dolores quasi voluptates voluptatibus neque ad quam. Consectetur amet accusantium fugiat at eum dignissimos, nulla commodi consequuntur nihil alias, obcaecati cumque possimus.
                            Delectus fuga saepe laboriosam eos consequuntur eum quam debitis. Autem officiis mollitia a. Laboriosam asperiores enim quisquam, fugit libero nesciunt facere amet laborum reiciendis corrupti explicabo tempore, mollitia praesentium maxime.
                            Iste tenetur mollitia, corrupti dolor rerum ipsa nihil facere eaque enim nulla harum esse. Consequatur blanditiis, facere, esse sequi exercitationem unde debitis, soluta rerum suscipit dolores vitae deleniti? Nostrum, ipsam!
                            Doloremque cum quo eos provident officia odio incidunt necessitatibus voluptatem similique sed in dolores, odit nesciunt ipsum nobis quibusdam quaerat itaque assumenda accusantium quos aliquam modi voluptas! Libero, corporis soluta.
                            Ducimus ullam repellat a doloremque modi animi totam impedit. Quo illo saepe tenetur modi fugit, at eaque rem quis dolorum odio ipsam ipsum eligendi illum voluptatum est nam dolorem. Tempore?
                            Eligendi, illo maxime quod odio id obcaecati fugit deleniti quas, ad eaque deserunt alias, vero quaerat. Animi omnis pariatur, sequi ab modi praesentium harum ipsa aliquam deserunt tempore voluptatum itaque.
                            Possimus veniam sit consequuntur numquam quos explicabo voluptates adipisci delectus, corporis mollitia non? Repellendus vero ipsam fugiat porro impedit harum eveniet atque iusto? Illum, ducimus nulla. Accusamus placeat eius facilis.
                            Ipsam molestiae animi soluta impedit eos deleniti, magni hic blanditiis. Provident eveniet, eum libero laudantium commodi placeat ipsa, rerum maxime nisi distinctio asperiores autem labore minima quo blanditiis dolorem voluptates?
                            Officiis, sint accusantium commodi, corrupti repudiandae libero nulla, eveniet animi autem necessitatibus soluta fuga! Ad aut, corrupti dignissimos, nihil voluptate provident similique consectetur architecto neque et explicabo rem assumenda incidunt?
                            Reiciendis perferendis minima aspernatur. Harum soluta id beatae eaque vero voluptas perferendis eveniet, atque asperiores ipsam quam, officiis earum et labore aliquid, similique recusandae inventore enim architecto repellendus vel? Nemo!
                            Architecto nesciunt, obcaecati consequuntur, quod quis quidem, quia eum facere rem animi illo deserunt! Eveniet sequi iusto incidunt sapiente deserunt minima eligendi necessitatibus? Non temporibus sit autem vero quas dolorum.
                            Eos blanditiis cumque ex culpa, nisi esse temporibus quaerat assumenda aperiam dignissimos eveniet amet sed hic nemo et. Provident nemo exercitationem mollitia illum veritatis, tempore quae magnam accusantium amet debitis!
                            Eos velit id eius sed veniam non eaque nesciunt dolorem quibusdam molestias, inventore voluptatem voluptas placeat aliquam ratione doloribus quia, laboriosam ad nemo facere ea obcaecati numquam excepturi quisquam? Excepturi.
                            Consequuntur expedita vel at maiores voluptatem nam blanditiis, atque necessitatibus, sint odio asperiores voluptate eligendi totam, doloribus in repudiandae optio provident adipisci. Illum, commodi ab exercitationem consequatur autem illo voluptatum.
                            Explicabo nisi vitae dignissimos similique ducimus, laudantium tenetur. Repudiandae ex ut ad esse voluptates laborum doloremque voluptate. Perferendis ex reprehenderit exercitationem libero blanditiis laborum delectus commodi ratione corporis, consequatur ipsum!
                            Officiis quisquam beatae quia similique, unde ipsam corrupti neque perspiciatis iure. Aut animi inventore suscipit officia! Eaque doloribus tempora, non culpa natus sapiente nobis voluptatem atque aut. Magni, quos molestias!
                            Cumque libero nulla eos ex deleniti optio explicabo ipsa magnam alias voluptatibus doloremque omnis quisquam consequuntur, hic laudantium vel maxime! Tenetur nostrum soluta reiciendis autem doloribus iusto, non accusantium quas.
                            Autem est saepe repudiandae maiores eligendi magnam nemo vel, explicabo perspiciatis odio, magni quis officiis voluptatibus exercitationem voluptatum. Corrupti laudantium placeat ut dignissimos accusamus vitae libero ratione eligendi vero repellat.
                            Incidunt nihil optio accusamus inventore eligendi reprehenderit nisi ea iusto earum ipsum mollitia veritatis voluptas esse commodi tenetur libero expedita laboriosam quisquam aliquam sit, voluptatibus cum temporibus? Illum, numquam harum?
                            Quisquam, ex. Officia dolorum earum, neque alias nobis, quaerat voluptate dolor sed placeat sapiente sequi. Perferendis tempore soluta labore qui sequi inventore, consequuntur omnis in, modi sit est distinctio molestias.
                            Quo, aut cupiditate. Accusamus pariatur laudantium possimus hic voluptate ratione, delectus nam odit eveniet dolore ex autem voluptas consectetur nihil fuga! Tempora delectus soluta incidunt repudiandae laborum numquam, perferendis laboriosam.
                            Quasi consequuntur aspernatur ipsam? Consectetur consequatur sequi eveniet, inventore necessitatibus esse quis modi enim beatae nostrum tenetur fugit error exercitationem ea doloribus qui? Cupiditate vel in ipsum voluptates doloremque dignissimos.
                            Natus, quam saepe aliquid nisi expedita alias dignissimos ullam vel nemo eaque at maiores eligendi error tenetur assumenda perspiciatis doloribus id mollitia commodi voluptas soluta nulla temporibus delectus ipsa. Magnam.
                            Quibusdam corporis rem totam enim in natus harum asperiores adipisci soluta. Laboriosam repudiandae magni consequuntur quo? Quibusdam reprehenderit enim sunt quisquam! Harum quam dolorum ea fuga, animi nisi! Necessitatibus, culpa?
                            Hic pariatur autem molestiae quia ratione voluptatibus doloremque laudantium exercitationem neque minus? Similique nobis asperiores corrupti reprehenderit fuga et soluta quos quas laboriosam, atque veritatis eius doloremque obcaecati aliquid voluptatem.
                            Voluptates vitae consectetur esse magni, ex necessitatibus blanditiis velit ad? Iure ullam distinctio velit culpa blanditiis natus excepturi, unde animi amet, beatae enim quae accusamus dolor repellat. Ducimus, praesentium iste.
                            Deserunt iure rem molestias nostrum totam omnis laborum. Mollitia atque saepe doloremque? Autem at debitis similique, voluptate veniam quas nobis nostrum facilis eaque accusamus ipsum quam quisquam quibusdam odio. Molestiae!
                            Error soluta, natus sapiente rerum atque reprehenderit, commodi odit distinctio nulla temporibus fugit porro est dolor dignissimos possimus dolores nemo aliquam, nobis expedita pariatur quo quod? Perspiciatis ipsa reiciendis minus.
                            Illo quia commodi, ut itaque quidem odio, explicabo rerum ipsum fugit ipsam velit. Ratione assumenda fugit, excepturi, enim non est tenetur dignissimos sapiente quis veniam laudantium, voluptate id iusto incidunt.
                            Fuga obcaecati laudantium earum ab excepturi iure ducimus inventore doloribus necessitatibus autem voluptates, saepe voluptatum aperiam, ipsam fugit temporibus doloremque vel alias eveniet. Distinctio sint tenetur, vero consectetur corrupti eos!
                            Doloremque ab nihil deleniti incidunt facilis unde dolorum, sint aspernatur exercitationem voluptatum quam facere repellat quibusdam magnam blanditiis necessitatibus tempore placeat autem ut reiciendis nam. Repellat error laboriosam qui fugit.
                            Alias, tempora. Pariatur nam praesentium nulla omnis perferendis quia numquam quaerat, ab quos. Tempore dolores velit veritatis laudantium eos quibusdam asperiores, pariatur possimus doloribus fuga, doloremque nisi, quod voluptatem dicta!
                            Quae explicabo nesciunt vel nisi sint modi nulla. Molestiae ad sequi magni sunt ratione in sapiente, aspernatur harum, quisquam neque illum ea dolores. Voluptate aliquid id dolores? Labore, cupiditate fugit.
                            Consequuntur eius esse quidem nihil suscipit fugit, repudiandae rem, reprehenderit mollitia exercitationem placeat dicta! Non, fugiat! Beatae, vel accusantium facere veniam accusamus laborum molestias. Vitae mollitia labore vero? Aliquid, velit.
                            Asperiores libero quod nemo nesciunt dicta vitae sint at illo! Non natus repudiandae voluptates nemo odit voluptas obcaecati suscipit nisi quidem eum placeat dolore, repellendus, voluptatibus saepe adipisci eligendi a?
                            Illo quis ea consequuntur minus labore sunt, rerum iure impedit tempora dicta harum dolores explicabo natus beatae cupiditate praesentium iste nulla? Aliquid expedita quam itaque consectetur quidem. Velit, possimus dolorum?
                        </Typography>
                    </StyledAdminContent>
                    <StyledAdminFooter>
                        <FooterApp />
                    </StyledAdminFooter>
                </Box>
            </StyledAdminContainer>
        </Box>
    );
};

export default PageAdminLayout;
