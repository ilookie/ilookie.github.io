# Gemfile
source "https://rubygems.org"

# 指定 Jekyll 版本
gem "jekyll", "~> 4.3.2"

# GitHub Pages 依赖
gem "github-pages", group: :jekyll_plugins

# 主题
gem "minima", "~> 2.5"

# 插件
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end

# Windows 特定依赖
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1"
  gem "tzinfo-data"
end

# Windows 性能优化
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# HTTP 服务器
gem "webrick", "~> 1.7"