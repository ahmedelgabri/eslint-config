with import <nixpkgs> { };
mkShell {
  # name = "";
  buildInputs = [ nodejs_20 nodePackages.pnpm ];
}
