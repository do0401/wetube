css {guide: lines;}
=========================
이 글은 [cssguidelin.es](https://cssguidelin.es/)의 내용을 번역한 글입니다.

# High-level advice and guidelines for writing sane, manageable, scalable CSS
## Contents
- [css {guide: lines;}](#css-guide-lines)
- [High-level advice and guidelines for writing sane, manageable, scalable CSS](#high-level-advice-and-guidelines-for-writing-sane-manageable-scalable-css)
  - [Contents](#contents)
    - [Up Next](#up-next)
  - [- Legacy, Hacks, and Technical Debt](#legacy-hacks-and-technical-debt)
  - [Introduction](#introduction)
    - [The Importance of a Styleguide](#the-importance-of-a-styleguide)
    - [Disclaimers](#disclaimers)
  - [Syntax and Formatting](#syntax-and-formatting)
    - [Multiple Files](#multiple-files)
    - [Table of Contents](#table-of-contents)
    - [80 Charactors Wide](#80-charactors-wide)
    - [Titling](#titling)
    - [Anatomy of a Ruleset](#anatomy-of-a-ruleset)
    - [Multi-line CSS](#multi-line-css)
    - [Indenting](#indenting)
    - [Indenting Sass](#indenting-sass)
    - [Alignment](#alignment)
    - [Meaningful Whitespace](#meaningful-whitespace)
    - [HTML](#html)
    - [Further Reading](#further-reading)
  - [Commenting](#commenting)
    - [High-level](#high-level)
    - [Object-Extension Pointers](#object-extension-pointers)
    - [Low-level](#low-level)
    - [Preprocessor Comments](#preprocessor-comments)
    - [Removing Comments](#removing-comments)
  - [Naming Conventions](#naming-conventions)
    - [hyphen Delimited](#hyphen-delimited)
    - [BEM-like Naming](#bem-like-naming)
    - [Starting Context](#starting-context)
    - [More Layers](#more-layers)
    - [Modifying Elements](#modifying-elements)
    - [Naming Conventions in HTML](#naming-conventions-in-html)
    - [JavaScript Hooks](#javascript-hooks)
    - [data-*Attributes](#data-attributes)
    - [Taking It Further](#taking-it-further)
    - [Further Reading](#further-reading-1)
  - [CSS Selectors](#css-selectors)
    - [Selector Intent](#selector-intent)
    - [Reusability](#reusability)
    - [Location Independence](#location-independence)
    - [Portability](#portability)
    - [Quasi-Qualified Selectors](#quasi-qualified-selectors)
    - [Naming](#naming)
    - [Naming UI Components](#naming-ui-components)
    - [Selector Performance](#selector-performance)
    - [The Key Selector](#the-key-selector)
    - [General Rules](#general-rules)
    - [Further Reading](#further-reading-2)
  - [Specificity](#specificity)
    - [Keep It Low at All Times](#keep-it-low-at-all-times)
    - [IDs in CSS](#ids-in-css)
    - [Nesting](#nesting)
    - [Scope](#scope)
    - [Further Reading](#further-reading-3)
    - [!important](#important)
    - [Hacking Specificity](#hacking-specificity)
    - [Further Reading](#further-reading-4)
  - [Architectural Principles](#architectural-principles)
    - [High-level Overview](#high-level-overview)
    - [Object-orientation](#object-orientation)
    - [Further Reading](#further-reading-5)
  - [The Single Responsibility Principle](#the-single-responsibility-principle)
    - [Further Reading](#further-reading-6)
  - [The Open/Closed Principle](#the-openclosed-principle)
    - [Further Reading](#further-reading-7)
  - [DRY](#dry)
    - [Further Reading](#further-reading-8)
  - [Composition over Inheritance](#composition-over-inheritance)
  - [The Separation of Concerns](#the-separation-of-concerns)
    - [Misconceptions](#misconceptions)

### Up Next
- Preprocessors
- Layout
- Performance
- Sanity, Simplicity
- Code Smells
- Legacy, Hacks, and Technical Debt
---
## Introduction
CSS는 예쁜 언어가 아닙니다. 배우기 쉽고 시작하기 쉽지만, 곧 any reasonable scale에서 문제가 됩니다. CSS가 작동하는 방식을 변경하기 위해 할 수 있는 일은 많지 않지만, 우리가 작성하고 구조화하는 방식을 변경할 수는 있습니다.<br><br>
다양한 specialities와 abilities를 가진 수십 명의 개발자가 함께 하는 거대한 장기 프로젝트 작업을 하게 되면 모든 개발자가 통일된 방식으로 일하는 것은 중요합니다.

- keep stylesheets maintainable;
- keep code transparent, sane, and readable;
- keep stylesheets scalable.

이러한 목표를 달성하기 위해 반드시 사용해야 하는 다양한 기술이 있으며, CSS Guidlines는 우리가 그렇게 하는 데 도움이 되는 권장 사항들과 접근 방법들에 관한 문서입니다.

### The Importance of a Styleguide
코딩 스타일 가이드(디자인 스타일 가이드가 아닌)는 아래와 같은 팀 구성원들에게 유용한 도구입니다.
- 합리적 기간 동안 제품을 제작하고 유지 관리해야 하는 팀;
- 능력과 전문성이 다른 개발자가 있는 팀;
- 주어진 시간에 제품을 개발하는 수많은 개발자가 있는 팀;
- 새로운 직원을 정기적으로 on-board 시키는 팀;
- 개발자가 코드베이스를 여러 개 가지고 있는 팀;

스타일 가이드는 일반적으로 장기간에 걸쳐 여러 개발자가 진행하는 대형 코드베이스 프로젝트 팀에 더 적합하지만, 모든 개발자는 자신의 코드에서 어느 정도의 표준화를 위해 노력해야 합니다.

훌륭한 스타일 가이드는 잘 지켜지면,
- 코드베이스의 코드 품질 표준을 설정합니다.
- 코드베이스 간에 일관성을 유지합니다.
- 개발자에게 코드베이스 간 친숙함을 제공합니다.
- 생산성을 높입니다.

Styleguides should be learned, understood, and implemented at all times on a project which is governed by one, and any deviation must be fully justified.

### Disclaimers
CSS Guidelines는 일반적인 스타일 가이드(a styleguide)입니다; 특정한 스타일 가이드(the styleguide)는 아닙니다. 여기에는 권장할 만한 방법론, 기법 및 팁이 포함되어 있으나 여러분의 취향과 상황은 다를 수 있습니다. Your mileage may vary. 

이 가이드라인은 논쟁의 여지가 있지만, 다양한 규모의 프로젝트에서 수년동안 tried, tested, stressed, refined, broken, reworked, and revisited 를 거쳤습니다.

---
## Syntax and Formatting
스타일 가이드의 가장 간단한 형태 중 하나는 구문과 구성 방식에 관한 일련의 규칙입니다. CSS를 사용하는 표준 방법을 가지고 있다면 그 코드는 팀 구성원에게 친숙해질 것입니다.

또한 깔끔해 보이는 코드가 깔끔하게 느껴진다. 그것은 작업하기에 훨씬 좋은 환경이며, 다른 개발자에게도 그러한 기준을 유지하게 만든다. 못생긴 코드는 안좋은 사례를 만든다.

high-level에서 우리는,
- 탭이 아닌, 2개의 공백 들여쓰기를 원합니다.
- 80자 너비의 열을 원합니다.
- 다중 라인 CSS를 원합니다.
- 공백의 의미있는 사용을 원합니다.

하지만 다른 어떤 것과 마찬가지로, 구체적인 사항들은 다소 관련이 없습니다. 일관성이 중요합니다.

### Multiple Files
최근 전처리기가 폭발적으로 증가하면서 개발자들이 여러 파일에 걸쳐 CSS를 분리하는 경우가 많습니다.

전처리기를 사용하지 않더라도 코드 조각들을 빌드 단계에서 연결된 파일로 분할하는 것이 좋습니다.

어떤 이유로든 여러 파일에 걸쳐 작업하지 않는 경우, 다음 섹션에서 설정을 맞추기 위해 어느 정도의 벤딩(bending)이 필요할 수 있습니다.

### Table of Contents
목차는 유지 관리에 상당히 큰 과부하를 초래할 수 있지만 이로 인한 편익은 그 어떤 것보다 큽니다. 목차를 최신 상태로 유지하기 위해서는 부지런한 개발자가 필요하지만, 이는 그럴만한 충분히 가치가 있습니다. 최신 상태의 목차는 팀에게 CSS 프로젝트의 내용, 기능 및 순서를 단일화하여 제공합니다.

간단한 목차는 섹션 이름과 해당 섹션이 무엇이고 어떤 작업을 수행하는지에 대한 간단한 요약 정보를 제공할 것입니다.

```
/**
 * CONTENTS
 *
 * SETTINGS
 * Global...............Globally-available variables and config.
 *
 * TOOLS
 * Mixins...............Useful mixins.
 *
 * GENERIC
 * Normalize.css........A level playing field.
 * Box-sizing...........Better default `box-sizing`.
 *
 * BASE
 * Headings.............H1–H6 styles.
 *
 * OBJECTS
 * Wrappers.............Wrapping and constraining elements.
 *
 * COMPONENTS
 * Page-head............The main page header.
 * Page-foot............The main page footer.
 * Buttons..............Button elements.
 *
 * TRUMPS
 * Text.................Text helpers.
 */
```
각 항목은 섹션에 매핑되고(또는 되거나) 포함합니다.

물론 이 섹션은 대부분의 프로젝트에서 실질적으로 더 방대할 수 있지만, 우리는 이 섹션으로 인해 개발들에게 어떤 항목이 어디에서 사용되고, 어떻게 사용되는지에 대한 프로젝트 전반의 견해를 제공하고자 합니다.

### 80 Charactors Wide
가능하다면 CSS 파일의 너비를 80자로 제한하세요. 이유는 다음과 같습니다.
- 여러 개의 파일을 나란히 열어 둘 수 있도록;
- Github과 같은 사이트 또는 터미널 창에서 CSS를 볼 수 있도록;
- 코멘트를 위한 충분한 줄 길이를 제공;

```
/**
 * I am a long-form comment. I describe, in detail, the CSS that follows. I am
 * such a long comment that I easily break the 80 character limit, so I am
 * broken across several lines.
 */
```
URL이나 gradient 구문과 같은 예외는 있을 수 있습니다.

### Titling
CSS 프로젝트의 모든 새로운 주요 섹션을 제목과 함께 시작하세요.
```
/*------------------------------------*\
  #SECTION-TITLE
\*------------------------------------*/

.selector { }
```
섹션 제목에는 더 많은 검색을 수행할 수 있도록 해시(#) 기호가 앞에 붙습니다. SECTION-TITLE 검색은 많은 결과를 산출할 수 있으며, #SECTION-TITLE 검색은 해당 섹션만 반환해야 합니다.

이 제목과 다음 코드 라인 사이에는 carrige return을 남겨둡니다.(코멘트나 Sass, 또는 CSS 몇 줄을 더 입력할 수 있도록)

각 섹션이 자체 파일인 프로젝트에서 작업하는 경우, 제목은 각 섹션의 상단에 나타나야 합니다. 파일 당 여러 개의 섹션이 있는 프로젝트에서 작업하는 경우, 각 제목에는 5개의 carrige return이 선행되어야 합니다. 제목과 결합된 이 추가 공백으로 대용량 파일을 스크롤할 때 새 섹션을 훨씬 쉽게 찾을 수 있습니다.
```
/*------------------------------------*\
  #A-SECTION
\*------------------------------------*/

.selector { }





/*------------------------------------*\
  #ANOTHER-SECTION
\*------------------------------------*/

/**
 * Comment
 */

.another-selector { }
```
### Anatomy of a Ruleset
룰셋(rulesets)을 작성하는 방법을 논의하기 전에 먼저 관련 용어를 숙지하세요.
```
[selector] {
  [property]: [value];
  [<--declaration--->]
}
```
예를 들어:
```
.foo, .foo--bar,
.baz {
  display: block;
  background-color: green;
  color: red;
}
```
여기서 우리는 아래와 같은 것을 알 수 있습니다.
- 연관이 있는 선택자는 같은 라인에 있고, 연관이 없는 선택자는 새로운 라인에 있는 것;
- 여는 중괄호({) 앞에 공백이 있는 것;
- 속성과 속성값이 같은 라인에 있는 것;
- 속성과 속성값을 구분하는 콜론(:) 뒤에 공백이 있는 것;
- 각 선언이 새로운 라인에 있는 것;
- 마지막 선택자와 같은 라인에 여는 중괄호({)가 있는 것;
- 여는 중괄호({) 후에 새로운 라인에 첫번째 선언이 있는 것;
- 닫는 중괄호(})가 따로 새로운 라인에 있는 것;
- 각 선언이 2개의 공백으로 들여쓰기되어 있는 것;
- 마지막 선언에 세미콜론(;)이 붙는 것;

이 형식은 대체로 보편적인 표준과 같습니다.(공백 수를 제외하고는)
따라서 다음 내용은 올바르지 않습니다.
```
.foo, .foo--bar, .baz
{
	display:block;
	background-color:green;
	color:red }
```
여기에는 아래와 같은 문제가 포함됩니다.
- 공백 대신 탭을 사용한 것;
- 연관이 없는 선택자가 같은 라인에 있는 것;
- 여는 중괄호({)가 따로 새로운 라인에 있는 것;
- 닫는 중괄호(})가 따로 새로운 라인에 있지 않은 것;
- 마지막 선언에 세미콜론(;)이 붙지 않은 것;
- 콜론(:) 다음에 공백이 없는 것;

### Multi-line CSS
CSS는 특정한 경우를 제외하고는 보통 여러 행에 걸쳐 작성되어야 합니다. 이는 다음과 같은 여러가지 이점이 있습니다.
- 각 기능이 자체 라인에 존재하기 때문에 병합 충돌(merge conflicts)의 가능성이 줄어듭니다.
- 한 줄에 하나의 변화만을 표현하기 때문에 더 확실하게 차이점을 알 수 있습니다.

이 규칙에 대한 예외는 매우 분명하게 구분되어야 합니다. 오직 하나의 선언만 있는 경우가 바로 그것입니다.
```
.icon {
  display: inline-block;
  width:  16px;
  height: 16px;
  background-image: url(/img/sprite.svg);
}

.icon--home     { background-position:   0     0  ; }
.icon--person   { background-position: -16px   0  ; }
.icon--files    { background-position:   0   -16px; }
.icon--settings { background-position: -16px -16px; }
```
이러한 유형의 룰셋(rulesets)은 단일 행의 이점이 있습니다.
- 그것들은 여전히 일률적으로 한 라인 당 하나의 변화를 표현하는 규칙을 따릅니다.
- 그것들은 다른 룰셋(rulesets)만큼 주의깊게 읽을 필요가 없습니다. 그것만으로 충분한 유사성을 공유하기 때문입니다. 이 경우에는 선택자를 쉽게 스캔할 수 있는 것이 더 큰 이점이 됩니다.

### Indenting
개별 선언에 대한 들여쓰기 뿐만 아니라, 관련 규칙 집합 전체를 들여서 서로의 관계를 알립니다.
예를 들어:
```
.foo { }

  .foo__bar { }

    .foo__baz { }
```
이렇게 하면 개발자는 .foo__baz{} 가 .foo__bar{} 내부에 있다는 사실을 한 눈에 볼 수 있습니다.

이 DOM의 유사 복제(quasi-replication)는 개발자들에게 HTML을 참고하지 않고도 해당 클래스가 어디에 사용될지 예상할 수 있게 도와줍니다.

### Indenting Sass
Sass는 중첩(nesting) 기능을 제공합니다.
```
.foo {
  color: red;

  .bar {
    color: blue;
  }

}
```
그리고 우리는 컴파일된 아래의 CSS를 사용할 것입니다.
```
.foo { color: red; }
.foo .bar { color: blue; }
```
**N.B.** 가능하다면 Sass의 중첩(nesting)은 피해야 합니다. 자세한 내용은 [the Specificity section](##Specificity) 을 참조하세요.

### Alignment
선언에서 공통적이고 연관이 있는 문자열을 정리하고자 합니다.
예를 들어:
```
.foo {
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;
}

.bar {
  position: absolute;
  top:    0;
  right:  0;
  bottom: 0;
  left:   0;
  margin-right: -10px;
  margin-left:  -10px;
  padding-right: 10px;
  padding-left:  10px;
}
```
이렇게 하면 한 번에 여러 개의 동일하고 정렬된 라인을 변경할 수 있으므로, 컬럼(column) 편집을 지원하는 텍스트 에디터를 사용하는 개발자를 더 편하게 만들어 줍니다.

### Meaningful Whitespace
들여쓰기 뿐만 아니라 룰셋(rulesets) 간의 여유 공간을 자유롭고 현명하게 사용함으로써 많은 정보를 제공할 수 있습니다.
- 밀접하게 관련된 룰셋(rulesets) 간에는 하나의 빈 줄을 사용한다.
- 느슨하게 관련된 룰셋(rulesets) 간에는 두 개의 빈 줄을 사용한다.
- 완전히 새로운 섹션 사이에는 다섯 개의 빈 줄을 사용한다.

예를 들어:
```
/*------------------------------------*\
  #FOO
\*------------------------------------*/

.foo { }

  .foo__bar { }


.foo--baz { }





/*------------------------------------*\
  #BAR
\*------------------------------------*/

.bar { }

  .bar__baz { }

  .bar__foo { }
```
두 개의 룰셋(rulesets) 사이에 빈 줄이 없는 경우는 없어야 합니다.
아래 내용은 틀린 것입니다.
```
.foo { }
  .foo__bar { }
.foo--baz { }
```

### HTML
HTML과 CSS가 본질적으로 상호 연관되어 있다는 점을 감안할 때, 마크업을 위한 구문과 형식화 가이드라인을 다루지 않는 것은 매우 실망스러운 일일 것입니다.

만약 따옴표를 사용하지 않아도 동작하는 상황일지라도 항상 따옴표는 사용하세요. 이로 인해 문제가 발생할 가능성이 줄어들고, 대다수의 개발자들에게 더 익숙한 형식입니다.
```
<div class=box>
```
위 형식보다 아래 형식이 더 선호됩니다.
```
<div class="box">
```
따옴표는 여기서 필수 조건은 아니지만, 안전 측면에서 그것은 에러에 포함됩니다.

클래스 속성에 여러 값을 사용하려면 두 개의 공백으로 구분하세요.
```
<div class="foo  bar">
```
여러 클래스가 서로 연관되어 있다면 대괄호([])로 그룹화하는 것이 좋습니다.
```
<div class="[ box  box--highlight ]  [ bio  bio--long ]">
```
이것은 아직도 내가 시험 중이고, 확고한 권고 사항은 아니지만, 많은 이점을 가지고 있습니다. [Grouping related classes in your markup.](https://csswizardry.com/2014/05/grouping-related-classes-in-your-markup/)을 더 읽어보세요.

CSS에서의 룰셋(rulesets)과 마찬가지로 HTML에서도 공백 라인을 의미있게 사용할 수 있습니다. 5개의 빈 줄로 컨텐츠를 주제별로 나눌 수 있습니다.
```
<header class="page-head">
  ...
</header>





<main class="page-content">
  ...
</main>





<footer class="page-foot">
  ...
</footer>
```
독립적이고 느슨하게 연관된 마크업 사이는 하나의 빈 줄로 구분하세요.
```
<ul class="primary-nav">

  <li class="primary-nav__item">
    <a href="/" class="primary-nav__link">Home</a>
  </li>

  <li class="primary-nav__item  primary-nav__trigger">
    <a href="/about" class="primary-nav__link">About</a>

    <ul class="primary-nav__sub-nav">
      <li><a href="/about/products">Products</a></li>
      <li><a href="/about/company">Company</a></li>
    </ul>

  </li>

  <li class="primary-nav__item">
    <a href="/contact" class="primary-nav__link">Contact</a>
  </li>

</ul>
```
이를 통해 개발자는 DOM의 개별 부분들을 한 눈에 파악할 수 있으며, Vim과 같은 특정 텍스트 편집기를 사용하여 빈 줄로 구분된 마크업 블록을 조작할 수 있습니다.

### Further Reading
- [Grouping related classes in your markup.](https://csswizardry.com/2014/05/grouping-related-classes-in-your-markup/)

---

## Commenting
CSS로 작업을 할 때는 알고 있어야 할 것이 너무 많습니다. 알고 있어야 할 것도 많고, 프로젝트 별로 기억해야 할 규칙도 많습니다. 대부분의 개발자가 겪는 최악의 상황은 스스로 작성한 코드를 제대로 기억하지 못하는 것입니다. 스스로 작성한 클래스, 규칙, 객체 및 헬퍼 등을 기억하는 것은 어느 정도 가능하지만, CSS를 넘겨받은 누군가는 그렇지 못할 것입니다.

**CSS needs more comments**

CSS는 실제로 문서의 흔적을 많이 남기지 않는 선언적 언어이기 때문에 CSS만 봐서는 아래와 같은 내용을 이해하기 어렵습니다.
- 일부 CSS가 다른 코드에서 사용되는지;
- 일부 코드를 변경하면 다른 곳에서 어떤 영향을 미치는지;
- 어디서 CSS가 사용될 수 있는지;
- 어떤 스타일이(의도적으로 또는 다른 방식으로) 상속받을 수 있는 스타일인지;
- 어떤 스타일이(의도적으로 또는 다른 방식으로) 전달될 수 있는 스타일인지;
- 제작자가 CSS를 사용하고자 하는 곳이 어디인지;

이것은 심지어 CSS의 많은 단점들을 고려하지 않은 것입니다. 이를 테면, arious sates of overflow triggering block formatting context 또는 certain transform properties triggering hardware acceleration 와 같은 것이 있습니다. 이는 프로젝트를 상속받는 개발자들을 더욱 당황스럽게 만듭니다.

CSS만으로는 코드의 내용을 잘 전달하기 힘듭니다. 그래서 코드에 코멘트를 작성하는 것은 CSS를 이해하는 데에 큰 도움을 줍니다.

일반적으로 코드만으로는 명백하게 설명할 수 없는 것에 코멘트를 작성해야 합니다. 다시 말해서, ```color: red;``` 는 설명할 필요가 없습니다. 하지만 만약 ```overflow: hidden;```을 사용했다면 이것은 코멘트를 작성할 필요가 있습니다.

### High-level
문서의 전체 섹션이나 구성요소를 설명하는 내용이 긴 코멘트의 경우, 80열 너비를 준수하는 문서 형식 다중 라인 코멘트를 사용합니다.

다음은 [CSS Wizard](https://csswizardry.com/)에서 페이지 헤더를 디자인하는 CSS의 실제 예시입니다.
```
/**
 * The site’s main page-head can have two different states:
 *
 * 1) Regular page-head with no backgrounds or extra treatments; it just
 *    contains the logo and nav.
 * 2) A masthead that has a fluid-height (becoming fixed after a certain point)
 *    which has a large background image, and some supporting text.
 *
 * The regular page-head is incredibly simple, but the masthead version has some
 * slightly intermingled dependency with the wrapper that lives inside it.
 */
```
모든 중요한 코드(descriptions of states, permutations, conditions, and treatments)에는 이정도 수준의 코멘트가 표준적으로 작성되어야 합니다.

### Object-Extension Pointers
CSS 파일을 쪼개서 작업하거나 OOCSS 방식으로 작업할 때, 서로 연관되는 룰셋(rulesets)이 항상 같은 파일이나 같은 위치에 있는 것이 아니라는 것을 알게 될 것입니다. 예를 들어, 단순히 구조적인 스타일을 제공하는 일반 버튼 객체가 있을 수 있습니다. 그리고 이 버튼은 용도에 맞게 컴포넌트 레벨의 일부로 확장됩니다. 그러한 파일 간의 관계를 간단한 객체 확장 지시자(object-extension pointers)를 통해 문서화 합니다.
```
/**
 * Extend `.btn {}` in _components.buttons.scss.
 */

.btn { }
```
그리고 버튼을 사용하는 파일에서는 아래와 같이 작성합니다.
```
/**
 * These rules extend `.btn {}` in _objects.buttons.scss.
 */

.btn--positive { }

.btn--negative { }
```
이렇게 간단하고 어렵지 않은 노력으로 인해 프로젝트 간 관계를 알지 못하거나, 다른 스타일을 상속받을 수 있는 방법, 이유 및 위치를 알고 싶어하는 개발자들에게 큰 도움을 줄 수 있습니다.

### Low-level
가끔 우리는 룰셋(rulesets)의 특정 선언(즉, 행)에 대해 코멘트를 남기고 싶어 합니다.
이렇게 하려면 일종의 각주를 사용합니다. 여기 위에서 언급한 사이트 헤더 코멘트보다 더 복잡한 코멘트가 있습니다.
```
/**
 * Large site headers act more like mastheads. They have a faux-fluid-height
 * which is controlled by the wrapping element inside it.
 *
 * 1. Mastheads will typically have dark backgrounds, so we need to make sure
 *    the contrast is okay. This value is subject to change as the background
 *    image changes.
 * 2. We need to delegate a lot of the masthead’s layout to its wrapper element
 *    rather than the masthead itself: it is to this wrapper that most things
 *    are positioned.
 * 3. The wrapper needs positioning context for us to lay our nav and masthead
 *    text in.
 * 4. Faux-fluid-height technique: simply create the illusion of fluid height by
 *    creating space via a percentage padding, and then position everything over
 *    the top of that. This percentage gives us a 16:9 ratio.
 * 5. When the viewport is at 758px wide, our 16:9 ratio means that the masthead
 *    is currently rendered at 480px high. Let’s…
 * 6. …seamlessly snip off the fluid feature at this height, and…
 * 7. …fix the height at 480px. This means that we should see no jumps in height
 *    as the masthead moves from fluid to fixed. This actual value takes into
 *    account the padding and the top border on the header itself.
 */

.page-head--masthead {
  margin-bottom: 0;
  background: url(/img/css/masthead.jpg) center center #2e2620;
  @include vendor(background-size, cover);
  color: $color-masthead; /* [1] */
  border-top-color: $color-masthead;
  border-bottom-width: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset;

  @include media-query(lap-and-up) {
    background-image: url(/img/css/masthead-medium.jpg);
  }

  @include media-query(desk) {
    background-image: url(/img/css/masthead-large.jpg);
  }

  > .wrapper { /* [2] */
    position: relative; /* [3] */
    padding-top: 56.25%; /* [4] */

    @media screen and (min-width: 758px) { /* [5] */
      padding-top: 0; /* [6] */
      height: $header-max-height - double($spacing-unit) - $header-border-width; /* [7] */
    }

  }

}
```
이러한 유형의 코멘트는 룰셋(rulesets)이 속해 있는 부분을 참조하는 동안 모든 문서를 한 곳에 보관할 수 있게 해줍니다.(These types of comment allow us to keep all of our documentation in one place whilst referring to the parts of the ruleset to which they belong.)

### Preprocessor Comments
대부분의 전처리기에서 최종 CSS 파일에는 컴파일되지 않는 코멘트를 작성할 수 있습니다. 일반적으로 이 코멘트를 사용하여 해당 CSS 파일에 기록되지 않는 코드를 문서화합니다. 컴파일 할 코드에 코멘트를 작성하려고 한다면, 함께 컴파일되는 코멘트를 작성하세요. 예를 들어, 아래와 같은 것을 의미합니다.
```
// Dimensions of the @2x image sprite:
$sprite-width:  920px;
$sprite-height: 212px;

/**
 * 1. Default icon size is 16px.
 * 2. Squash down the retina sprite to display at the correct size.
 */
.sprite {
  width:  16px; /* [1] */
  height: 16px; /* [1] */
  background-image: url(/img/sprites/main.png);
  background-size: ($sprite-width / 2 ) ($sprite-height / 2); /* [2] */
}
```
위에서 전처리기 코멘트를 사용하여 변수(CSS 파일로 컴파일되지 않는 코드)를 문서화 한 반면, CSS 코드(CSS 파일로 컴파일될 코드)는 CSS 코멘트를 사용하여 문서화했습니다. 즉, 컴파일된 스타일시트를 디버깅할 때 정확하고, 관련있는 정보만 사용할 수 있다는 것을 의미합니다.

### Removing Comments
어떠한 코멘트도 상용 환경으로 유입되어서는 안되기 때문에 배포하기 전에 모든 CSS를 축소(minified)하여 코멘트를 없애야 합니다.

---

## Naming Conventions
CSS의 명명 규칙은 코드를 보다 엄격하고 투명하며 유익하게 만드는 데 매우 유용합니다.

좋은 명명 규칙은 아래와 같은 것을 알려줄 것입니다.
- 클래스가 어떤 작업 수행하는지
- 어디서 클래스가 사용될 수 있는지
- 어떤 클래스와 연관이 있는지

저자가 따르는 명명 규칙은 매우 간단합니다. 복잡한 코드에 대해 BEM-like naming을 하고 문자열을 하이픈(-)으로 구분합니다.

### hyphen Delimited

### BEM-like Naming

### Starting Context

### More Layers

### Modifying Elements

### Naming Conventions in HTML

### JavaScript Hooks

### data-*Attributes

### Taking It Further

### Further Reading

---

## CSS Selectors

### Selector Intent

### Reusability

### Location Independence

### Portability

### Quasi-Qualified Selectors

### Naming

### Naming UI Components

### Selector Performance

### The Key Selector

### General Rules

### Further Reading

---

## Specificity

### Keep It Low at All Times

### IDs in CSS

### Nesting

### Scope

### Further Reading

### !important

### Hacking Specificity

### Further Reading

---

## Architectural Principles

### High-level Overview

### Object-orientation

### Further Reading

## The Single Responsibility Principle

### Further Reading

## The Open/Closed Principle

### Further Reading

## DRY

### Further Reading

## Composition over Inheritance

## The Separation of Concerns

### Misconceptions