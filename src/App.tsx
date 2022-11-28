import { createMedia } from "@artsy/fresnel";
import { ReactElement, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Menu, Segment, Visibility } from "semantic-ui-react";

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
// interface HomepageHeadingProps {
//   mobile?: boolean;
// }
// const HomepageHeading = ({ mobile }: HomepageHeadingProps) => (
//   <Container text>
//     <Header
//       as="h1"
//       content="Imagine-a-Company"
//       inverted
//       style={{
//         fontSize: mobile ? "2em" : "4em",
//         fontWeight: "normal",
//         marginBottom: 0,
//         marginTop: mobile ? "1.5em" : "3em",
//       }}
//     />
//     <Header
//       as="h2"
//       content="Do whatever you want when you want to."
//       inverted
//       style={{
//         fontSize: mobile ? "1.5em" : "1.7em",
//         fontWeight: "normal",
//         marginTop: mobile ? "0.5em" : "1.5em",
//       }}
//     />
//     <Button primary size="huge">
//       Get Started
//       <Icon name="arrow right" />
//     </Button>
//   </Container>
// );

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
interface DesktopContainerProps {
  children?: ReactElement[] | ReactElement;
}
const DesktopContainer = ({ children }: DesktopContainerProps) => {
  //
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  const navigate = useNavigate();
  const location = useLocation();

  const onClickRegister = () => {
    navigate("/register");
  };

  const onClickBack = () => {
    navigate(-1);
  };

  const isMainPage = () =>
    useMemo(() => {
      console.log(location);
    }, [location]);

  return (
    <Visibility>
      <Segment
        inverted
        style={{ minHeight: 1440, padding: "1em 0em" }}
        vertical
      >
        <Menu secondary>
          <Menu.Item name="home">
            <Button circular inverted icon="angle left" onClick={onClickBack} />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Button
                circular
                inverted
                icon="pencil alternate"
                onClick={onClickRegister}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {children}
      </Segment>
    </Visibility>
  );
};

// interface MobileContainerProps {
//   children?: ReactElement[] | ReactElement;
// }
// const MobileContainer = ({ children }: MobileContainerProps) => {
//   //
//   const [sidebarOpened, setSidebarOpened] = useState(false);

//   const handleSidebarHide = () => setSidebarOpened(false);
//   const handleToggle = () => setSidebarOpened(true);

//   return (
//     <Media at="mobile">
//       <Sidebar.Pushable>
//         <Sidebar
//           as={Menu}
//           animation="overlay"
//           inverted
//           onHide={handleSidebarHide}
//           vertical
//           visible={sidebarOpened}
//         >
//           <Menu.Item as="a" active>
//             Home
//           </Menu.Item>
//           <Menu.Item as="a">Work</Menu.Item>
//           <Menu.Item as="a">Company</Menu.Item>
//           <Menu.Item as="a">Careers</Menu.Item>
//           <Menu.Item as="a">Log in</Menu.Item>
//           <Menu.Item as="a">Sign Up</Menu.Item>
//         </Sidebar>

//         <Sidebar.Pusher dimmed={sidebarOpened}>
//           <Segment
//             inverted
//             textAlign="center"
//             style={{ minHeight: 1440, padding: "1em 0em" }}
//             vertical
//           >
//             <Container>
//               <Menu inverted pointing secondary size="large">
//                 <Menu.Item onClick={handleToggle}>
//                   <Icon name="sidebar" />
//                 </Menu.Item>
//                 {/* <Menu.Item position="right">
//                   <Button as="a" inverted>
//                     Log in
//                   </Button>
//                   <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
//                     Sign Up
//                   </Button>
//                 </Menu.Item> */}
//               </Menu>
//               {children}
//             </Container>
//           </Segment>
//         </Sidebar.Pusher>
//       </Sidebar.Pushable>
//     </Media>
//   );
// };

interface ResponsiveContainerProps {
  children?: ReactElement[] | ReactElement;
}
export const ResponsiveContainer = ({ children }: ResponsiveContainerProps) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  // <MediaContextProvider>
  <DesktopContainer>{children}</DesktopContainer>
  // {/* <MobileContainer>{children}</MobileContainer> */}
  // </MediaContextProvider>
);
