# lilulang
LiLu (lilulang) is a fork of lululang

java -Xmx500M -cp '/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH' org.antlr.v4.Tool -Dlanguage=JavaScript -lib grammar -o lib -visitor -Xexact-output-dir grammar/lilu_grammar.g4

antlr4 -Dlanguage=JavaScript -lib grammar -o lib -Xexact-output-dir grammar/lilu_grammar.g4