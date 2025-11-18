{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.python311
  ];
  idx = {
    extensions = [];
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["python3" "-m" "http.server" "$PORT" "--directory" "./public"];
          manager = "web";
        };
      };
    };
    workspace = {
      onCreate = {
        install = "npm install";
      };
      onStart = {};
    };
  };
}
